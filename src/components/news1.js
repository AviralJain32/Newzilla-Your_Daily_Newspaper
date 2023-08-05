import React, { useEffect, useState } from "react";
import Newsitem from "./newsitem1";
import Spinner from "./spinner1";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
//props ko change nhi kr sakte but state ko change kr sakte ho

const News1 = (props) => {
    const [Articles, setArticles] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [TotalResults, setTotalResults] = useState(0);
    // document.title = `NEWZILLA - ${props.category}`;

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=91526cd190ac4f32b4ee8fd5e043d059&page=${Page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=91526cd190ac4f32b4ee8fd5e043d059&page=${Page + 1}&pageSize=${props.pageSize}`;
        setPage(Page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(Articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };
    return (
        <div>
            <h1 className="text-center" style={{ marginTop: "90px" }}>
                Newzilla - Top Headlines
            </h1>
            {Loading && <Spinner></Spinner>}
            <InfiniteScroll dataLength={Articles.length} next={fetchMoreData} hasMore={Articles.length !== TotalResults} loader={<Spinner></Spinner>} style={{ width: "100%", overflow: "hidden" }}>
                <div className="container">
                    <div className="row">
                        {Articles.map((element) => {
                            return (
                                <div key={element.url} className="col-md-4">
                                    <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
                                </div>
                            );
                        })}
                        ;
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}
News1.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
};
News1.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
};
export default News1;

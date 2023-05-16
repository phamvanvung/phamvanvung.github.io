function createNews(date, desc){
  d3.csv("./data/news.csv").then((data)=>{
    const news = d3.select("#news").selectAll(".news").data(data).enter().append("div");
    news.append('div').attr("class", "divider");
    const oneNews = news.append('div').attr("class", "card-content");
    oneNews.append("b").text(d=>d.date);
    oneNews.append("br");
    oneNews.append("span").html(d=>d.desc);
  });
}
createNews();
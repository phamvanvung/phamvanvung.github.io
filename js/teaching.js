function createTeaching(){
  d3.csv("./data/teaching.csv").then(data=>{
    data = d3.group(data, d => d.semester);
    const semesters = d3.select("#courses").selectAll(".course").data(data).enter().append("div").attr("class", "row");
    semesters.append("b").attr("class", "grey-text darken-5").text(d=>d[0]);
    semesters.append("br");
    
    const courses = semesters.selectAll(".course").data(d=>d[1]).enter().append("div");
    courses.append("span").text(d=>d.course);
    courses.append("span").attr("style", "float: right").text(d=>d.time);
  });
}
createTeaching();
function createPublications() {
  d3.csv("./data/publications.csv").then((data) => {
    const cards = d3
      .select("#research")
      .append("div")
      .attr("class", "row")
      .selectAll("card")
      .data(data)
      .enter()
      .append("div")
      .attr("class", "card");
    // content
    const contents = cards.append("div").attr("class", "card-content");
    const row = contents.append("div").attr("class", "row");
    const cols10 = row.append("div").attr("class", "col s10");
    cols10
      .append("a")
      .attr("href", (d) => d.publink)
      .attr("target", "_blank")
      .append("span")
      .attr("class", "card-title")
      .html((d) => d.title);
    cols10.append("p").html((d) => d.authors);
    cols10.append("p").text((d) => d.date);
    cols10.append("p").text((d) => d.publisher);
    const cols2 = row.append("div").attr("class", "col s2");
    cols2
      .append("a")
      .attr("href", (d) => "publications/" + d.id + ".pdf")
      .attr("target", "_blank")
      .append("img")
      .attr("src", (d) => "images/publications/" + d.id + ".jpg")
      .attr("alt", "")
      .attr("class", "square responsive-img");
    // actions
    const actions = cards
      .append("div")
      .attr("class", "card-action right-align");
    // actions - paper
    actions
      .append("a")
      .attr("href", (d) => "publications/" + d.id + ".pdf")
      .attr("target", "_blank")
      .attr("class", "btn-floating waves-effect waves-light blue btn-small")
      .style("margin-right", "5px")
      .append("i")
      .attr("class", "material-icons")
      .text("picture_as_pdf");
    // actions - bibtext
    actions
      .append("a")
      .attr("href", (d) => "#" + d.id)
      .attr(
        "class",
        "btn-floating waves-effect waves-light blue modal-trigger btn-small"
      )
      .style("margin-right", "5px")
      .append("i")
      .attr("class", "material-icons")
      .text("format_quote");
    // actions - doi
    actions
      .append("a")
      .attr("href", (d) => d.doi)
      .attr("target", "_blank")
      .attr("class", "btn-floating btn-small waves-effect waves-light blue")
      .style("margin-right", "5px")
      .append("i")
      .attr("class", "ai ai-doi");
    // actions - github
    actions
      .append("a")
      .attr("href", (d) => d.github)
      .attr("target", "_blank")
      .attr("class", "btn-floating waves-effect waves-light blue btn-small")
      .style("margin-right", "5px")
      .append("i")
      .attr("class", "fab fa-github");
    // actions - video

    actions
      .append("a")
      .attr("href", (d) => d.video)
      .attr("target", "_blank")
      .attr("class", "btn-floating waves-effect waves-light blue btn-small")
      .style("margin-right", "5px")
      .append("i")
      .attr("class", "material-icons")
      .text("video_library");

    // modals (for bitext)
    const modals = cards
      .append("div")
      .attr("id", (d) => d.id)
      .attr("class", "modal modal-fixed-footer");
    // modals - content
    const modalContent = modals.append("div").attr("class", "modal-content");
    modalContent.append("h5").text("BibTex Entry");
    modalContent.append("p").html((d) => d.bibtext);
    // modals - footer
    modals
      .append("div")
      .attr("class", "modal-footer")
      .append("a")
      .attr("href", "#!")
      .attr("class", "modal-close waves-effect waves-green btn-flat")
      .text("Close");
  });
}
createPublications();

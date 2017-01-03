function wc()
{
d3.csv("./wc.csv", 
  function(data)
  {
    d3.wordcloud()
      .size([1000, 600])
      .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
      .words(data)
      .start();
  });
}
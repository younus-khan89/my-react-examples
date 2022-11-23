const Home = () => {
    const myStyle = {
        backgroundColor: "#666",
        padding: "30px",
        textAlign: "center",
        fontSize: "35px",
        color: "white",
      }
      const myNav = {
        float: "left",
        width: "30%",
        height: "300px", /* only for demonstration, should be removed */
        background: "#ccc",
        padding: "20px",
      }
      const footer ={
            backgroundColor: "#777",
            padding: "10px",
            textAlign: "center",
            color: "white"
      }
      const navul ={
        listStyleType: "none",
        padding: "0"
      }
      const article ={
        float: "left",
        padding: "20px",
        width: "70%",
        backgroundColor: "#f1f1f1",
        height: "300px" /* only for demonstration, should be removed */
      }

      /*const section=after {
        content: "",
        display: table,
        clear: both
      }*/
      
    return (
        <>  
         <h1>Home</h1>
         <h2>CSS Layout Float</h2>

<header style={myStyle}>
  <h2>Layout-Test</h2>
</header>

<section>
  <nav style={myNav}>
    <ul>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
    </ul>
  </nav>
  
  <article>
    <h1>Content</h1>
    <p>xyxxxxxx.</p>
    <p>kkkkkkkkkkkkkkkkkkkkk.</p>
  </article>
</section>

<footer style={footer}>
  <p>Footer</p>
</footer>
        </>
    )
  };
  
  export default Home;
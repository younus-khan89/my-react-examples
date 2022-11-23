const Home = () => {
    return (
        <>
         <h1>Home</h1>
         <form>
            <label for="fname">First name:</label><br></br>
            <input type="text" id="fname" name="fname" value="younus"></input><br></br>
            <label for="lname">Last name:</label><br></br>
            <input type="text" id="lname" name="lname" value="khan"></input><br></br><br></br>
            <input type="submit" value="Submit"></input>
         </form>
        </>
    )
  };
  
  export default Home;
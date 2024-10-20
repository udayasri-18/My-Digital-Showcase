const Portfolio = () => {
  return (
    <section>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <h4>Movies CRUD Website</h4>
          <p>
            A full-stack web application enabling users to perform CRUD operations 
            on movie records in a MySQL database. The user-friendly interface allows 
            easy addition, editing, and deletion of movie entries. It employs 
            Node.js and Express.js for backend functionality and RESTful APIs for 
            seamless data interaction.
          </p>
          <a href="https://github.com/udayasri-18/movies-crud-website">GitHub Repo</a>
        </li>
        <li>
          <h4>Inventory Demand Forecasting</h4>
          <p>
            An algorithm that accurately predicts product demand using historical 
            sales data and machine learning techniques. It employs time series 
            forecasting methods like ARIMA and LSTM to analyze trends and seasonality. 
            The system enhances inventory management by reducing overstocking and 
            understocking.
          </p>
          <a href="https://github.com/udayasri-18/inventory-demand-forecasting">GitHub Repo</a>
        </li>
        <li>
          <h4>SmartAmbulance</h4>
          <p>
            A smart ambulance system designed to navigate traffic efficiently, 
            reducing response times. It utilizes Arduino technology to control 
            traffic signals and optimize routes in real-time. This innovation aims 
            to enhance emergency response and patient care.
          </p>
        </li>
        <li>
          <h4>GeneratorSkates</h4>
          <p>
            An innovative skateboard that generates electrical power while in 
            motion. It harnesses kinetic energy produced during skating to promote 
            sustainable energy practices. The design includes an electric generator 
            and an energy storage system for charging devices.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;

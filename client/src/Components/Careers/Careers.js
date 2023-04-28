import "../Careers/Careers.css";

const Careers = () => {
  return (
    <>
      <div className="careers-headers">
        <h1 className="center-align">Careers at NBA STATS</h1>
        <p className="center-align sub-heading">
          See our job oppurtunities below.
        </p>
      </div>
      <div className="careers-container">
        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Engineering</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">Front-End Engineer</p>
            <p className="careers-description">
              Join the NBA Stats team as a Front-End Engineer to help us build
              beautiful and intuitive user-facing systems.
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>

        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Engineering</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">Back-End Engineer</p>
            <p className="careers-description">
              Join the NBA Stats team as a Back-End Engineer to help us build
              reliable APIs and high-performance infrastructure.
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>

        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Engineering</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">DevOps Engineer</p>
            <p className="careers-description">
              Join the NBA Stats team as a DevOps Engineer to help us
              continuously deploy, test, scale and maintain our large scale
              operations
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>

        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Finance</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">Staff Accountant</p>
            <p className="careers-description">
              Join the NBA Stats team as a Staff Accountant to help us keep
              track of our extensive financial and business operations.
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>

        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Management</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">Product Manager</p>
            <p className="careers-description">
              Join the NBA Stats team as a Product Manager to oversee our
              vision, partaking in both engineering and business endeavours.
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>

        <div className="careers-card">
          <div className="careers-info">
            <p>{new Date().toDateString()}</p>
            <p className="careers-position bold">Research</p>
          </div>
          <div className="careers-text">
            <p className="careers-title">Data Scientist</p>
            <p className="careers-description">
              Join the NBA Stats team as a Data Scientist to help us analyze the
              live game statistics for our upcoming player performance project.
            </p>
          </div>
          <div className="careers-info">
            <p className="careers-status">Position Unavailable</p>
            <p className="bold">Recruitment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;

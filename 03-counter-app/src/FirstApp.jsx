import PropTypes from "prop-types";

//const newMessage = "Fernando";

/* const newMessage = {
  message:"Hola",
  title:"Fernando",
};
 */

const getResult = () => {
  return 4 + 4;
};

export const FirstApp = ({ title, subtitle }) => {
  //console.log(props);
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle + 1}</p>
      {/* {props.title} */}
      <h1>{getResult()}</h1>
      {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
      <p>Soy un subtitulo</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

export default FirstApp;

export function ColorBox({ color }) {
  const styles = {
    width: "300px",
    height: "40px",
    backgroundColor: color,
    marginTop: "5px",
  };
  return <div style={styles}></div>;
}

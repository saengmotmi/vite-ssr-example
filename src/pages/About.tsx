import { useRouter } from "../libs/Router";

const About = () => {
  const { push } = useRouter();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>about</h2>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};

export default About;

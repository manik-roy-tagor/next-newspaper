
export async function generateMetadata() {
  return {
    title: "Team | Newspaper",
    description: "This is a newspaper",
  }
}

const layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default layout;
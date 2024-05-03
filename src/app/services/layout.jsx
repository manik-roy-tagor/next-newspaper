
export async function generateMetadata() {
  return {
    title: "Services | Newspaper",
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
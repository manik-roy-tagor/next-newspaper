
export async function generateMetadata() {
  return {
    title: "Starts | Newspaper",
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
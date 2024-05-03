
export async function generateMetadata() {
  return {
    title: "Testimonials | Newspaper",
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
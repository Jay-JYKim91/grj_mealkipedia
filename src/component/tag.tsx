type TagProps = {
  type: string;
  content: string;
};

const Area = ({ content }) => {
  return (
    <span
      className={
        "p-2 py-px mb-1 border-2 rounded-3xl border-lime-300 bg-lime-300 text-lime-700"
      }
    >
      {content}
    </span>
  );
};

const Default = ({ content }) => {
  return (
    <span
      className={
        "p-2 py-px mb-1 border-2 rounded-3xl border-orange-300 bg-orange-300 text-orange-700"
      }
    >
      {content}
    </span>
  );
};

const Tag = ({ type, content }: TagProps) => {
  //   let style: string = "";

  //   switch (type) {
  //     case "area":
  //       style =
  //         "p-2 py-px mb-1 border-2 rounded-3xl border-lime-300 bg-lime-300 text-lime-700";
  //       break;
  //     case "tag":
  //       style =
  //         "p-2 py-px mb-1 border-2 rounded-3xl border-orange-300 bg-orange-300 text-orange-700";
  //       break;
  //     default:
  //   }

  return (
    <>
      {type === "area" ? (
        <Area content={content} />
      ) : (
        <Default content={content} />
      )}
    </>
  );
};

export default Tag;

type MessageProps = {
  content: string;
  type: string;
}

const Message = ({ content, type }: MessageProps) => {
  if (content === "...") return <div>...</div>
  return (
    <div>
      <div style={{ fontWeight: '800' }}>
        {type === "user" ? (
          <div style={{ color: 'blue' }}>You:</div>
        ) : (
          <div style={{ color: 'green' }}>KyleGPT:</div>
        )}
      </div>
      <p style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </p>
    </div>
  );
}

export default Message;
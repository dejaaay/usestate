function Footer() {
    const currentTime = new Date().getHours() * 100 + new Date().getMinutes();
    const status = currentTime >= 800 && currentTime <= 2100;
    const time = new Date().toLocaleTimeString([], { timeStyle: "short" });

    return (
      <div>
        <h3 className="text-danger fs-5">
          It is currently {time}.<br/>  Please{" "}
          {status
            ? "Do your Task. Don't Slack off "
            : "Take a break and sleep."}
        </h3>
      </div>
    );
  }

  export default Footer;
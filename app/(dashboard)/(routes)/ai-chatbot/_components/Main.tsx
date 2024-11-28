"use client";
import { useContext } from "react";
import "./App.css";
import { Context } from "@/context/Context";
import { SendHorizontal, Sparkle, Sparkles, User, User2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText: string) => {
    setInput(promptText);
  };

  const { user } = useUser();
  return (
    <div className="main overflow-scroll h-[58vh]">
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>
                  Hello ,{user?.firstName} {user?.lastName}
                </span>
              </p>
              <p>How Can i Help You Today?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <User2 className="img" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <Sparkles className="img h-6 w-6" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <SendHorizontal
                onClick={() => {
                  onSent(input);
                }}
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

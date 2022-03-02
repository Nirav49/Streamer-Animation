import React ,{createRef}from "react";
import styled from "styled-components";
import "./App.css";
import { useSorting } from "./custom-hooks/useSorting";
import { StreamersList } from "./components/StreamersList";
import AnimatedList from "./components/AnimatedList";

const App: React.FC = () => {
  const { streamers } = useSorting();

  return (
    <div className="App">
      <ListParent >
        <AnimatedList>
          {streamers.map((streamer, index) => {
            return (
              <StreamersList
                index={index}
                items={streamer}
                key={streamer.displayName}
                ref={createRef()}
              />
            );
          })}
        </AnimatedList>
      </ListParent>
    </div>
  );
};

const ListParent = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #FFFFFF;
  border-radius: 10px;
  max-height: 100%;
  overflow: auto;
  transition: ease all .3s;
`;
export default App;

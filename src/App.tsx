import React, { Suspense } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import apiPortal from 'api/apiPortal';
 

function App() {
  const setMainMenuList = useSetRecoilState(MainMenuState)
  const Main = React.lazy(async () => {
    const data = await apiPortal.getBootStrapData();
    console.log(data);
    setMainMenuList(data.menu);
    return await import('./layout/main/Main');
  })
  return (
    <div className="App">
      <Suspense fallback={<>Loading ...</>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;

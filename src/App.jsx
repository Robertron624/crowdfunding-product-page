import Header from './Layout/Header'
import './App.scss'
import ProjectTitle from './components/ProjectTitle'
import ProjectStats from './components/ProjectStats'

function App() {

  return (
    <>
      <Header/>
      <main>
        <ProjectTitle/>
        <ProjectStats/>
      </main>
    </>
  )
}

export default App

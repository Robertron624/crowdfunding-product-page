import Header from './Layout/Header'
import './App.scss'
import ProjectTitle from './components/ProjectTitle'
import ProjectStats from './components/ProjectStats'
import About from './components/About'

function App() {

  return (
    <>
      <Header/>
      <main>
        <ProjectTitle/>
        <ProjectStats/>
        <About/>
      </main>
    </>
  )
}

export default App

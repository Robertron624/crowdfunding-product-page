import './project-title.scss'

const ProjectTitle = () => {
  return (
    <div className="project-title">
        <img src="/logo-mastercraft.svg" alt="mastercraft logo" className='logo'/>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="buttons">
            <button className="back-this">Back this project</button>
            <button className="bookmark">
                Bookmark
                <img src="/icon-bookmark.svg" alt="bookmark icon" />
            </button>
        </div>
    </div>
  )
}

export default ProjectTitle
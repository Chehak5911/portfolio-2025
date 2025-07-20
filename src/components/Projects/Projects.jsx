import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-between">
        <ProjectCard
        title="My Technical Blog"
        main="A personal tech blog hosted on Hashnode where I share articles, tutorials, and insights on web development and programming."
        primaryButtonTitle="Visit"
        primaryButtonLink="https://hashnode.com/@chehakbatra"
        />
        <ProjectCard
          title="GoodReads Clone"
          main="A responsive web application inspired by GoodReads, where users can sign up, log in, explore books, organize them into shelves, and manage their reading journey via a personalized dashboard."
          primaryButtonTitle="Source Code"
          primaryButtonLink="https://github.com/Chehak5911/GoodReads_Frontend"
        />
        <ProjectCard
          title="Sudoku Game"
          main="A simple single-page application designed by utilizing the backtracking algorithm.
          You can get a new board or answer to the current one anytime."
          primaryButtonTitle="Demo"
          primaryButtonLink="https://sudokugames.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
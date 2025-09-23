import React from 'react'

async function getProjects() {
  const res = await fetch("http://localhost:1337/api/projects?populate=photo", {
    cache: "no-store",
  })
  return res.json()
}

const Project = async () => {
  const { data } = await getProjects()

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => {
          const photoUrl = project?.photo?.url
            ? `http://localhost:1337${project.photo.url}`
            : "https://placehold.co/600x400?text=No+Image"
          return (
            <div key={project.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={photoUrl}
                  alt={project.photo?.alternativeText || project.name}
                  className="object-cover max-w-2xl h-80"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.desc}</p>
                <div className="card-actions justify-end">
                  <a href={`${project.link}`} className="btn btn-primary">View</a>
                </div>
              </div>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Project

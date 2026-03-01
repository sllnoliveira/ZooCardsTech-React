import Card from "./components/Card"

function App() {

  const animals = [
    {
      id: 1,
      title: "Dev Cat",
      description: "Um gatinho aprendendo React e construindo interfaces modernas.",
      image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
    },
    {
      id: 2,
      title: "Dev Dog",
      description: "Um cãozinho aprendendo React e construindo interfaces modernas.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d"
    },
    {
      id: 3,
      title: "Dev Lion",
      description: "Um leão aprendendo React e construindo interfaces modernas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/330px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
    },
    {
      id: 4,
      title: "Dev Bird",
      description: "Um pássaro aprendendo React e construindo interfaces modernas.",
      image: "https://media.istockphoto.com/id/1200509115/pt/foto/earth-canary.jpg?s=612x612&w=0&k=20&c=5QJL0vq0A30PFNEMS_gyNPjhmLh2LfeHoGufCAzm-v0="
    },
  ]

  return (
    <div className="container">
      {animals.map((animal) => (
        <Card
          key={animal.id}
          title={animal.title}
          description={animal.description}
          image={animal.image}
        />
      ))}
    </div>
  )
}

export default App
const TrpcCodes: any = [[
  { type: "GET", code: `const { data: crudReadData, error: crudReadError } =
   trpc.crudRead.useQuery();` },
  {
    type: "POST", code: `const createMutation = trpc.crudCreate.useMutation();
  createMutation.mutate({
    id: 1,
    name: "New Item",
    github: "new-item",
  })`},
  {
    type: "PUT", code: `const updateMutation = trpc.crudUpdate.useMutation();
  updateMutation.mutate({
    id: crudReadData?.data.slice(-1)[0]._id,
    name: "Updated Item",
    github: "updated-item",
  })`},
  {
    type: "DELETE", code: `const deleteMutation = trpc.crudDelete.useMutation();
  deleteMutation.mutate({
    id: crudReadData?.data.slice(-1)[0]._id,
  })`},
],
[{ type: "GET", code: `const { data: newsData, error: newsError } = 
trpc.news.useQuery({ type: 'all' });` }],
[{ type: "GET", code: `const { data: sportsNewsData, error: sportsNewsError } = 
trpc.news.useQuery({ type: "sports" });` }],
[{ type: "GET", code: `const { data: movieData, error: movieError } = 
trpc.movie.useQuery();` }],
[{ type: "GET", code: `const { data: animeData, error: animeError } = 
trpc.anime.useQuery();` }],
[{ type: "GET", code: `const { data: mangaData, error: mangaError } = 
trpc.manga.useQuery();` }]
]
export default TrpcCodes;

import Movie from "../routes/Movie";
import Movies from "../routes/Movies";

export const RouterInfo = [
  {
    path: "/",
    // element : <Root/>,
    // errorElement : <NotFound/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
    ],
  },
];

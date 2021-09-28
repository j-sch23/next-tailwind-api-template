import EndpointDisclosure from "../components/EndpointDisclosure";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const endpoints = [
  {
    path: "/hello",
    type: "GET",
    params: [
      {
        param: "param1",
        type: "string",
        required: "required",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        param: "param2",
        type: "boolean",
        required: "optional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      // More params...
    ],
    example_request: "http://localhost:3000/api/hello",
    example_response: { name: "John Doe" },
    short_description: "responds with a name",
    body: "This amazing endpoint returns a name!",
  },
  {
    path: "/hello",
    type: "POST",
    params: [
      {
        param: "param1",
        type: "string",
        required: "required",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        param: "param2",
        type: "boolean",
        required: "optional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      // More params...
    ],
    example_request: "http://localhost:3000/api/hello",
    example_response: { name: "John Doe" },
    short_description: "responds with a name",
    body: "This amazing endpoint returns a name!",
  },
  {
    path: "/hello",
    type: "DELETE",
    params: [
      {
        param: "param1",
        type: "string",
        required: "required",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        param: "param2",
        type: "boolean",
        required: "optional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      // More params...
    ],
    example_request: "http://localhost:3000/api/hello",
    example_response: { name: "John Doe" },
    short_description: "responds with a name",
    body: "This amazing endpoint returns a name!",
  },

  // More endpoints...
];

export default function Docs() {
  return (
    <div className="flex flex-col  min-h-screen  bg-gray-50">
      <Head>
        <title>Simple API | Docs</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <Navigation active="Docs" />
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:px-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className=" flex flex-col space-y-3  items-start mb-5 border-b border-gray-300">
              <h2 className=" text-3xl text-gray-900 sm:text-4xl">
                Simple API
              </h2>

              <span className="bg-gray-600 text-gray-100 font-bold px-2 py-1 rounded text-center">
                1.0.0
              </span>

              <code className="text-sm">Base URL: example.com/api</code>
              <p>An API for doing great things.</p>
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener"
                className=" text-indigo-600 pb-2"
              >
                Contact developer
              </a>
            </div>
            <h2 className=" text-2xl  text-gray-900 ">Endpoints</h2>
            {endpoints.map((endpoint) => {
              return (
                <EndpointDisclosure
                  type={endpoint.type}
                  path={endpoint.path}
                  shortDescription={endpoint.short_description}
                  body={endpoint.body}
                  exampleResponse={endpoint.example_response}
                  exampleRequest={endpoint.example_request}
                  params={endpoint.params}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

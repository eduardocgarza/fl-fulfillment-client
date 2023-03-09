import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react"
import {
  BanknotesIcon,
  StarIcon,
  DocumentIcon,
  DocumentTextIcon,
  PaperClipIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid"

export default function HomePage() {
  return (
    <div className="bg-white shadow-xl py-7 px-5 rounded-2xl container mx-auto my-6 flex">
      <section id="left" className="w-1/2 px-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-6">Welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            temporibus fugiat debitis minus excepturi corporis blanditiis
            laborum cum nostrum. Doloribus sint, molestiae tempora vero quos sit
            culpa praesentium quae dolore.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl flex justify-center mb-6">
          <iframe
            width="640"
            height="400"
            src="https://www.loom.com/embed/221f217704be4b668928c1a4cacb2f0e"
            frameBorder="0"
            allowFullScreen
            // @ts-ignore
            // mozallowfullscreen
            title="Loom Onboarding Video"
          ></iframe>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Documents</h2>
          <Button variant="text" className="flex items-center gap-3">
            <DocumentIcon strokeWidth={2} className="h-5 w-5" /> Services
            Proposal
          </Button>
          <Button variant="text" className="flex items-center gap-3">
            <DocumentTextIcon strokeWidth={2} className="h-5 w-5" /> Services
            Contract
          </Button>
          <Button variant="text" className="flex items-center gap-3">
            <DocumentTextIcon strokeWidth={2} className="h-5 w-5" />{" "}
            Confidential Agreement (NDA)
          </Button>
          <Button variant="text" className="flex items-center gap-3">
            <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #1 -
            Retainer Payment
          </Button>
          <Button variant="text" className="flex items-center gap-3">
            <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #2 -
            Shortlist Delivery Payment
          </Button>
          <Button variant="text" className="flex items-center gap-3">
            <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #3 -
            Placement Delivery Payment
          </Button>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Job Posting</h2>
          <Card className=" shadow-lg mx-2">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Job Title
                </Typography>
              </div>
              <Typography color="gray">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
            </CardBody>
            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true}>
                View posting
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="right" className="w-1/2 px-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-6">Order Status</h2>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium veritatis molestiae ut porro? Aperiam, unde quasi ex alias tempora, rem voluptatum, nam veritatis sit dolores ab deleniti sint. Quod, maiores!
          </p>

          <div className="bg-gray-100 p-6 rounded-2xl flex justify-center mb-6">
            <iframe
              width={640*2/3}
              height={400*2/3}
              src="https://www.loom.com/embed/221f217704be4b668928c1a4cacb2f0e"
              frameBorder="0"
              allowFullScreen
              // @ts-ignore
              // mozallowfullscreen
              title="Loom Onboarding Video"
            ></iframe>
          </div>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0{" "}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Download ZIP
              </a>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Candidates Shortlist</h2>
          <div className="flex flex-wrap">
            <Card className="w-1/2">
              <CardHeader floated={false} className="h-80">
                <img
                  src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fteam-3.jpg&w=1080&q=100"
                  alt="Candidate"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Natalie Paisley
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  CEO / Co-Founder
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
            <Card className="w-1/2">
              <CardHeader floated={false} className="h-80">
                <img
                  src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fteam-3.jpg&w=1080&q=100"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Natalie Paisley
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  CEO / Co-Founder
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
            <Card className="w-1/2">
              <CardHeader floated={false} className="h-80">
                <img
                  src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fteam-3.jpg&w=1080&q=100"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Natalie Paisley
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  CEO / Co-Founder
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
            <Card className="w-1/2">
              <CardHeader floated={false} className="h-80">
                <img
                  src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fteam-3.jpg&w=1080&q=100"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Natalie Paisley
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  CEO / Co-Founder
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div>
          <h2>Settings</h2>
          {/* Add Block */}
        </div>
      </section>
    </div>
  )
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Button,
  Badge,
  Accordion,
  Switch,
  Progress,
  Spinner,
  Chip,
  Avatar,
  Tooltip,
  Input,
  Checkbox,
  Pagination,
  FadeContainer,
  SlideContainer,
  ScaleContainer,
  BounceContainer,
  TypeWriter,
  RevealText,
  CounterText,
  Modal,
  useModal,
  Breadcrumb,
  BreadcrumbItem,
} from "@lzzjokerzzl/react-ui-components";
import { LibraryStylesWrapper } from "@/shared/components/LibraryStylesWrapper";
// Library styles are loaded dynamically via LibraryStylesWrapper to isolate them

interface ComponentSection {
  id: string;
  title: string;
  description: string;
}

const sections: ComponentSection[] = [
  {
    id: "installation",
    title: "Installation",
    description: "How to install the library",
  },
  {
    id: "buttons",
    title: "Button",
    description: "Interactive buttons with multiple variants",
  },
  {
    id: "badge",
    title: "Badge",
    description: "Notification indicators and labels",
  },
  {
    id: "accordion",
    title: "Accordion",
    description: "Collapsible content sections",
  },
  {
    id: "forms",
    title: "Form Components",
    description: "Input, Checkbox, and Switch",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Progress, Spinner, and Chips",
  },
  {
    id: "avatar",
    title: "Avatar & Tooltip",
    description: "User avatars and tooltips",
  },
  {
    id: "pagination",
    title: "Pagination",
    description: "Page navigation controls",
  },
  { id: "modal", title: "Modal", description: "Overlay dialogs and popups" },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description: "Navigation breadcrumbs",
  },
  {
    id: "animations",
    title: "Animated Containers",
    description: "Fade, slide, scale, bounce",
  },
  {
    id: "text-animations",
    title: "Text Animations",
    description: "Typewriter, reveal, counter",
  },
];

function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

function SectionWrapper({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 border-b border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">{title}</h2>
        <p className="text-text-muted mb-6">{description}</p>
        {children}
      </motion.div>
    </section>
  );
}

export function DocumentationPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <LibraryStylesWrapper>
      <div className="min-h-screen bg-white">
        {/* Simple Navigation Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Portfolio
            </Link>
            <a
              href="https://github.com/TzzJokerzzT/library-component"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                @lzzjokerzzl/react-ui-components
              </h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                A comprehensive React UI component library with animations,
                built with TypeScript and Tailwind CSS
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  React 18+
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Framer Motion
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 lg:sticky lg:top-4 lg:h-fit">
              <nav className="bg-secondary p-4 rounded-lg">
                <h3 className="font-bold text-text-primary mb-4">Components</h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-text-muted hover:text-primary transition-colors text-sm block py-1"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Installation */}
              <SectionWrapper
                id="installation"
                title="Installation"
                description="Install the library using your preferred package manager"
              >
                <div className="space-y-4">
                  <CodeBlock
                    code={`# npm
npm install @lzzjokerzzl/react-ui-components

# yarn
yarn add @lzzjokerzzl/react-ui-components

# pnpm
pnpm add @lzzjokerzzl/react-ui-components

# bun
bun add @lzzjokerzzl/react-ui-components`}
                    language="bash"
                  />
                  <h3 className="text-lg font-semibold mt-6 mb-2">
                    Import Styles
                  </h3>
                  <CodeBlock
                    code={`import "@lzzjokerzzl/react-ui-components/styles.css";`}
                    language="tsx"
                  />
                </div>
              </SectionWrapper>

              {/* Button */}
              <SectionWrapper
                id="buttons"
                title="Button"
                description="Interactive buttons with multiple variants, colors and sizes"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="solid" color="primary">
                      Primary
                    </Button>
                    <Button variant="solid" color="secondary">
                      Secondary
                    </Button>
                    <Button variant="solid" color="success">
                      Success
                    </Button>
                    <Button variant="solid" color="warning">
                      Warning
                    </Button>
                    <Button variant="solid" color="danger">
                      Danger
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="bordered" color="primary">
                      Bordered
                    </Button>
                    <Button variant="faded" color="primary">
                      Faded
                    </Button>
                    <Button variant="ghost" color="primary">
                      Ghost
                    </Button>
                    <Button variant="light" color="primary">
                      Light
                    </Button>
                  </div>
                  <CodeBlock
                    code={`import { Button } from "@lzzjokerzzl/react-ui-components";

<Button variant="solid" color="primary">
  Primary
</Button>
<Button variant="bordered" color="secondary">
  Bordered
</Button>
<Button variant="ghost" color="danger">
  Ghost
</Button>`}
                  />
                </div>
              </SectionWrapper>

              {/* Badge */}
              <SectionWrapper
                id="badge"
                title="Badge"
                description="Notification indicators and labels for highlighting content"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-6 items-center">
                    <Badge content="5" color="primary">
                      <Button variant="faded">Notifications</Button>
                    </Badge>
                    <Badge content="99+" color="danger">
                      <Button variant="faded">Messages</Button>
                    </Badge>
                    <Badge content="" color="success" placement="top-right">
                      <Avatar name="John Doe" />
                    </Badge>
                  </div>
                  <CodeBlock
                    code={`import { Badge, Button } from "@lzzjokerzzl/react-ui-components";

<Badge content="5" color="primary">
  <Button variant="faded">Notifications</Button>
</Badge>

<Badge content="99+" color="danger">
  <Button variant="faded">Messages</Button>
</Badge>`}
                  />
                </div>
              </SectionWrapper>

              {/* Accordion */}
              <SectionWrapper
                id="accordion"
                title="Accordion"
                description="Collapsible content sections for organizing information"
              >
                <div className="space-y-6">
                  <Accordion
                    items={[
                      {
                        key: "1",
                        title: "What is this library?",
                        content:
                          "A comprehensive React UI component library with animations, built with TypeScript and Tailwind CSS.",
                      },
                      {
                        key: "2",
                        title: "How do I install it?",
                        content:
                          "You can install it using npm, yarn, pnpm, or bun with the command: npm install @lzzjokerzzl/react-ui-components",
                      },
                      {
                        key: "3",
                        title: "Is it compatible with Next.js?",
                        content:
                          "Yes! The library is fully compatible with both React and Next.js applications.",
                      },
                    ]}
                    variant="bordered"
                  />
                  <CodeBlock
                    code={`import { Accordion } from "@lzzjokerzzl/react-ui-components";

<Accordion
  items={[
    {
      key: "1",
      title: "What is this library?",
      content: "A comprehensive React UI component library..."
    },
    {
      key: "2", 
      title: "How do I install it?",
      content: "You can install it using npm, yarn..."
    }
  ]}
  variant="bordered"
/>`}
                  />
                </div>
              </SectionWrapper>

              {/* Form Components */}
              <SectionWrapper
                id="forms"
                title="Form Components"
                description="Input, Checkbox, and Switch components for forms"
              >
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        variant="bordered"
                      />
                    </div>
                    <div>
                      <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        variant="bordered"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 items-center">
                    <Checkbox
                      isSelected={checkboxValue}
                      onValueChange={setCheckboxValue}
                    >
                      Accept terms and conditions
                    </Checkbox>
                    <div className="flex items-center gap-2">
                      <Switch
                        isSelected={switchValue}
                        onValueChange={setSwitchValue}
                        color="primary"
                      />
                      <span className="text-sm">Enable notifications</span>
                    </div>
                  </div>
                  <CodeBlock
                    code={`import { Input, Checkbox, Switch } from "@lzzjokerzzl/react-ui-components";

<Input
  label="Email"
  placeholder="Enter your email"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  variant="bordered"
/>

<Checkbox isSelected={checked} onValueChange={setChecked}>
  Accept terms
</Checkbox>

<Switch isSelected={enabled} onValueChange={setEnabled} color="primary" />`}
                  />
                </div>
              </SectionWrapper>

              {/* Feedback */}
              <SectionWrapper
                id="feedback"
                title="Feedback Components"
                description="Progress bars, spinners, and chips for visual feedback"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Progress value={75} color="primary" label="75%" />
                    <Progress value={50} color="success" label="50%" />
                    <Progress value={25} color="warning" size="sm" />
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Spinner size="sm" color="primary" />
                    <Spinner size="md" color="secondary" />
                    <Spinner size="lg" color="success" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="primary">React</Chip>
                    <Chip color="secondary">TypeScript</Chip>
                    <Chip color="success">Tailwind</Chip>
                    <Chip color="warning" variant="bordered">
                      Warning
                    </Chip>
                    <Chip color="danger" variant="flat">
                      Error
                    </Chip>
                  </div>
                  <CodeBlock
                    code={`import { Progress, Spinner, Chip } from "@lzzjokerzzl/react-ui-components";

<Progress value={75} color="primary" label="75%" />
<Progress value={50} color="success" />

<Spinner size="md" color="primary" />

<Chip color="primary">React</Chip>
<Chip color="secondary" variant="bordered">TypeScript</Chip>`}
                  />
                </div>
              </SectionWrapper>

              {/* Avatar & Tooltip */}
              <SectionWrapper
                id="avatar"
                title="Avatar & Tooltip"
                description="User avatars with fallbacks and contextual tooltips"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4 items-center">
                    <Tooltip content="John Doe">
                      <Avatar name="John Doe" size="sm" />
                    </Tooltip>
                    <Tooltip content="Jane Smith">
                      <Avatar name="Jane Smith" size="md" />
                    </Tooltip>
                    <Tooltip content="Alex Buelvas">
                      <Avatar name="Alex Buelvas" size="lg" />
                    </Tooltip>
                    <Tooltip content="With image">
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        name="User"
                        size="lg"
                      />
                    </Tooltip>
                  </div>
                  <CodeBlock
                    code={`import { Avatar, Tooltip } from "@lzzjokerzzl/react-ui-components";

<Tooltip content="John Doe">
  <Avatar name="John Doe" size="md" />
</Tooltip>

<Tooltip content="With image">
  <Avatar 
    src="https://example.com/avatar.jpg" 
    name="User" 
    size="lg" 
  />
</Tooltip>`}
                  />
                </div>
              </SectionWrapper>

              {/* Pagination */}
              <SectionWrapper
                id="pagination"
                title="Pagination"
                description="Page navigation controls for paginated content"
              >
                <div className="space-y-6">
                  <Pagination
                    total={10}
                    page={currentPage}
                    onChange={setCurrentPage}
                    color="primary"
                  />
                  <p className="text-sm text-text-muted">
                    Current page: {currentPage}
                  </p>
                  <CodeBlock
                    code={`import { Pagination } from "@lzzjokerzzl/react-ui-components";

const [currentPage, setCurrentPage] = useState(1);

<Pagination
  total={10}
  page={currentPage}
  onChange={setCurrentPage}
  color="primary"
/>`}
                  />
                </div>
              </SectionWrapper>

              {/* Modal */}
              <SectionWrapper
                id="modal"
                title="Modal"
                description="Overlay dialogs and popups for important content"
              >
                <div className="space-y-6">
                  <Button onClick={onOpen} color="primary">
                    Open Modal
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                      <p className="text-text-muted mb-4">
                        This is a modal dialog. You can put any content here.
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button variant="faded" onClick={onClose}>
                          Cancel
                        </Button>
                        <Button color="primary" onClick={onClose}>
                          Confirm
                        </Button>
                      </div>
                    </div>
                  </Modal>
                  <CodeBlock
                    code={`import { Modal, useModal, Button } from "@lzzjokerzzl/react-ui-components";

const { isOpen, onOpen, onClose } = useModal();

<Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <div className="p-6">
    <h2>Modal Title</h2>
    <p>Modal content goes here...</p>
    <Button onClick={onClose}>Close</Button>
  </div>
</Modal>`}
                  />
                </div>
              </SectionWrapper>

              {/* Breadcrumb */}
              <SectionWrapper
                id="breadcrumb"
                title="Breadcrumb"
                description="Navigation breadcrumbs for showing page hierarchy"
              >
                <div className="space-y-6">
                  <Breadcrumb>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
                    <BreadcrumbItem href="/docs/components">
                      Components
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrent>Breadcrumb</BreadcrumbItem>
                  </Breadcrumb>
                  <CodeBlock
                    code={`import { Breadcrumb, BreadcrumbItem } from "@lzzjokerzzl/react-ui-components";

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
  <BreadcrumbItem isCurrent>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`}
                  />
                </div>
              </SectionWrapper>

              {/* Animated Containers */}
              <SectionWrapper
                id="animations"
                title="Animated Containers"
                description="Fade, slide, scale, and bounce animations for content"
              >
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FadeContainer>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="font-medium">FadeContainer</p>
                        <p className="text-sm text-text-muted">
                          Fades in when visible
                        </p>
                      </div>
                    </FadeContainer>
                    <SlideContainer direction="right" distance={50}>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="font-medium">SlideContainer</p>
                        <p className="text-sm text-text-muted">
                          Slides in from direction
                        </p>
                      </div>
                    </SlideContainer>
                    <ScaleContainer>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="font-medium">ScaleContainer</p>
                        <p className="text-sm text-text-muted">
                          Scales in when visible
                        </p>
                      </div>
                    </ScaleContainer>
                    <BounceContainer intensity="medium">
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="font-medium">BounceContainer</p>
                        <p className="text-sm text-text-muted">
                          Bounces in with spring
                        </p>
                      </div>
                    </BounceContainer>
                  </div>
                  <CodeBlock
                    code={`import { 
  FadeContainer, 
  SlideContainer, 
  ScaleContainer, 
  BounceContainer 
} from "@lzzjokerzzl/react-ui-components";

<FadeContainer>
  <div>Fades in when visible</div>
</FadeContainer>

<SlideContainer direction="right" distance={50}>
  <div>Slides in from right</div>
</SlideContainer>

<ScaleContainer>
  <div>Scales in when visible</div>
</ScaleContainer>

<BounceContainer intensity="high">
  <div>Bounces in with spring</div>
</BounceContainer>`}
                  />
                </div>
              </SectionWrapper>

              {/* Text Animations */}
              <SectionWrapper
                id="text-animations"
                title="Text Animations"
                description="Typewriter, reveal, and counter text effects"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-sm text-text-muted mb-2">
                        TypeWriter Effect:
                      </p>
                      <TypeWriter
                        text="Hello, I'm a typewriter effect!"
                        speed={80}
                        showCursor
                        className="text-xl font-bold text-primary"
                      />
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-sm text-text-muted mb-2">
                        RevealText Effect:
                      </p>
                      <RevealText
                        text="Words reveal one by one"
                        mode="word"
                        className="text-xl font-bold"
                      />
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="text-sm text-text-muted mb-2">
                        CounterText Effect:
                      </p>
                      <CounterText
                        from={0}
                        to={1000}
                        duration={2000}
                        format="number"
                        className="text-3xl font-bold text-primary"
                      />
                    </div>
                  </div>
                  <CodeBlock
                    code={`import { TypeWriter, RevealText, CounterText } from "@lzzjokerzzl/react-ui-components";

<TypeWriter
  text="Hello, I'm a typewriter effect!"
  speed={80}
  showCursor
/>

<RevealText
  text="Words reveal one by one"
  mode="word"
  preset="elegant"
/>

<CounterText
  from={0}
  to={1000}
  duration={2000}
  format="number"
/>`}
                  />
                </div>
              </SectionWrapper>

              {/* Footer */}
              <section className="py-12 text-center">
                <p className="text-text-muted">
                  Made with love by{" "}
                  <a
                    href="https://github.com/TzzJokerzzT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Alex Buelvas
                  </a>
                </p>
                <p className="text-sm text-text-light mt-2">
                  <a
                    href="https://github.com/TzzJokerzzT/library-component"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    View on GitHub
                  </a>
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </LibraryStylesWrapper>
  );
}

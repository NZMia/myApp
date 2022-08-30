import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import RichTextEditor from '../components/RichTextEditor';

afterEach(cleanup);

const setup = () => {
  const { container, renrender } = render(<RichTextEditor handleClick />);
  const inputTitle = screen.getByLabelText('blog-title');
  const blogContent = container.querySelector('.blogContent');
  const buttonSubmit = screen.getByRole('button', { name: /submit/i });

  return {
    inputTitle,
    blogContent,
    buttonSubmit,
    container,
    renrender
  };
};

test('richTextEditor should be render without crash', () => {
  const { inputTitle, blogContent, buttonSubmit } = setup();

  expect(inputTitle).toBeInTheDocument();
  expect(blogContent).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();
});

test('richTextEditor should able to update title', () => {
  const { inputTitle } = setup();
  expect(inputTitle.value).toBe('');

  fireEvent.change(inputTitle, { target: { value: 'Title' } });
  expect(inputTitle.value).toBe('Title');
});

test('richTextEditor should able to update content', () => {
  const { container } = setup();
  const quillContent = container.querySelector('.ql-editor');
  expect(quillContent.textContent).toBe('');

  fireEvent.change(quillContent, { target: { textContent: 'Content' } });
  expect(quillContent.textContent).toBe('Content');
});

test('richTextEditor should able to click the button', () => {
  const handleClick = jest.spyOn(console, 'log');
  const { buttonSubmit } = setup();

  fireEvent.click(buttonSubmit);
  expect(handleClick).toHaveBeenCalled();
});

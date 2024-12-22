import { sampleBooks } from "@/constants";

import BookList from "@/components/book/List";
import BookVideo from "@/components/book/Video";
import BookOverview from "@/components/book/Overview";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const book = sampleBooks.find((item) => item.id === +id) || sampleBooks[0];

  return (
    <>
      <BookOverview {...book} />

      <div className="my-20 flex flex-col gap-16 lg:flex-row">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3 className="text-xl font-semibold text-primary">Video</h3>

            <BookVideo videoUrl={book.video} />
          </section>

          <section className="mt-10 flex flex-col gap-7">
            <h3 className="text-xl font-semibold text-primary">Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
              <p>{book.summary}</p>
            </div>
          </section>
        </div>

        <BookList
          title="More Similar Books"
          books={sampleBooks.slice(4)}
          containerClassName="flex-1"
        />
      </div>
    </>
  );
};

export default Page;

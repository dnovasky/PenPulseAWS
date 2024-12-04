import { Image } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const options = {
  autoplay: true,
  smartSpeed: 1500,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
}

async function getAllPosts() {
  const url =
    'https://xdrxcq4gme7datslqin36e7ywy0xedyb.lambda-url.us-west-1.on.aws/'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error.message)
  }
}

const blogs = await getAllPosts()
const featured = blogs.filter((blog) => {
  return blog['featured'] == 'true'
})

const Home = () => {
  return (
    <div>
      <div className='container-fluid py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <OwlCarousel
                items={1}
                className='owl-carousel owl-theme position-relative mb-3 mb-lg-0'
                {...options}>
                {blogs.map((blog) => {
                  const { post_id, imageUrl, title, category, timestamp } = blog
                  return (
                    <div
                      key={post_id}
                      className='position-relative overflow-hidden'
                      style={{ height: '435px' }}>
                      <Image
                        className='img-fluid h-100'
                        alt=''
                        src={imageUrl}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className='overlay'>
                        <div className='mb-1'>
                          <a className='text-white' href=''>
                            {category}
                          </a>
                          <span className='px-2 text-white'>/</span>
                          <a className='text-white' href=''>
                            {timestamp}
                          </a>
                        </div>
                        <a
                          className='h2 m-0 text-white font-weight-bold'
                          href=''>
                          {title}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3'>
                <h3 className='m-0'>Categories</h3>
                <a
                  className='text-secondary font-weight-medium text-decoration-none'
                  href=''>
                  View All
                </a>
              </div>
              <div
                className='position-relative overflow-hidden mb-3'
                style={{ height: '80px' }}>
                <Image
                  className='img-fluid w-100 h-100'
                  width='100'
                  height='100'
                  alt=''
                  src='/img/cat-500x80-1.jpg'
                  style={{ objectFit: 'cover' }}
                />
                <a
                  href=''
                  className='overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none'>
                  Business
                </a>
              </div>
              <div
                className='position-relative overflow-hidden mb-3'
                style={{ height: '80px' }}>
                <Image
                  className='img-fluid w-100 h-100'
                  width='100'
                  height='100'
                  alt=''
                  src='/img/cat-500x80-2.jpg'
                  style={{ objectFit: 'cover' }}
                />
                <a
                  href=''
                  className='overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none'>
                  Technology
                </a>
              </div>
              <div
                className='position-relative overflow-hidden mb-3'
                style={{ height: '80px' }}>
                <Image
                  className='img-fluid w-100 h-100'
                  width='100'
                  height='100'
                  alt=''
                  src='/img/cat-500x80-3.jpg'
                  style={{ objectFit: 'cover' }}
                />
                <a
                  href=''
                  className='overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none'>
                  Entertainment
                </a>
              </div>
              <div
                className='position-relative overflow-hidden'
                style={{ height: '80px' }}>
                <Image
                  className='img-fluid w-100 h-100'
                  width='100'
                  height='100'
                  alt=''
                  src='/img/cat-500x80-4.jpg'
                  style={{ objectFit: 'cover' }}
                />
                <a
                  href=''
                  className='overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none'>
                  Sports
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid py-3'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3'>
            <h3 className='m-0'>Featured</h3>
            <a
              className='text-secondary font-weight-medium text-decoration-none'
              href=''>
              View All
            </a>
          </div>
          <OwlCarousel className='owl-carousel position-relative' {...options}>
            {featured.map((blog) => {
              const { post_id, category, timestamp, title, imageUrl } = blog
              return (
                <div
                  key={post_id}
                  className='position-relative overflow-hidden'
                  style={{ height: '300px' }}>
                  <Image
                    className='img-fluid w-100 h-100'
                    width='100'
                    height='100'
                    alt=''
                    src={imageUrl}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className='overlay'>
                    <div className='mb-1' style={{ fontSize: '13px' }}>
                      <a className='text-white' href=''>
                        {category}
                      </a>
                      <span className='px-1 text-white'>/</span>
                      <a className='text-white' href=''>
                        {timestamp}
                      </a>
                    </div>
                    <a className='h4 m-0 text-white' href=''>
                      {title}
                    </a>
                  </div>
                </div>
              )
            })}
          </OwlCarousel>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 py-3'>
              <div className='bg-light py-2 px-4 mb-3'>
                <h3 className='m-0'>Business</h3>
              </div>
              <OwlCarousel
                className='owl-carousel position-relative'
                {...options}>
                {blogs
                  .filter((blog) => blog.category == 'Business')
                  .map((blog) => {
                    const { post_id, category, title, timestamp, imageUrl } =
                      blog
                    return (
                      <div key={post_id} className='position-relative'>
                        <Image
                          className='img-fluid w-100'
                          alt=''
                          src={imageUrl}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className='overlay position-relative bg-light'>
                          <div className='mb-2' style={{ fontSize: '13px' }}>
                            <a href=''>{category}</a>
                            <span className='px-1'>/</span>
                            <span>{timestamp}</span>
                          </div>
                          <a className='h4 m-0' href=''>
                            {title}
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </OwlCarousel>
            </div>
            <div className='col-lg-6 py-3'>
              <div className='bg-light py-2 px-4 mb-3'>
                <h3 className='m-0'>Technology</h3>
              </div>
              <OwlCarousel
                className='owl-carousel position-relative'
                {...options}>
                {blogs
                  .filter((blog) => blog.category == 'Technology')
                  .map((blog) => {
                    const { post_id, category, title, timestamp, imageUrl } =
                      blog
                    return (
                      <div key={post_id} className='position-relative'>
                        <Image
                          className='img-fluid w-100'
                          alt=''
                          src={imageUrl}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className='overlay position-relative bg-light'>
                          <div
                            className='mb-2'
                            style={{
                              fontSize: '13px',
                              justifyContent: 'start',
                            }}>
                            <a href=''>{category}</a>
                            <span className='px-1'>/</span>
                            <span>{timestamp}</span>
                          </div>
                          <a className='h4 m-0' href=''>
                            {title}
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 py-3'>
              <div className='bg-light py-2 px-4 mb-3'>
                <h3 className='m-0'>Entertainment</h3>
              </div>
              <OwlCarousel
                className='owl-carousel position-relative'
                {...options}>
                {blogs
                  .filter((blog) => blog.category == 'Entertainment')
                  .map((blog) => {
                    const { post_id, category, title, timestamp, imageUrl } =
                      blog
                    return (
                      <div key={post_id} className='position-relative'>
                        <Image
                          className='img-fluid w-100'
                          alt=''
                          src={imageUrl}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className='overlay position-relative bg-light'>
                          <div className='mb-2' style={{ fontSize: '13px' }}>
                            <a href=''>{category}</a>
                            <span className='px-1'>/</span>
                            <span>{timestamp}</span>
                          </div>
                          <a className='h4 m-0' href=''>
                            {title}
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </OwlCarousel>
            </div>
            <div className='col-lg-6 py-3'>
              <div className='bg-light py-2 px-4 mb-3'>
                <h3 className='m-0'>Sports</h3>
              </div>
              <OwlCarousel
                className='owl-carousel position-relative'
                {...options}>
                {blogs
                  .filter((blog) => blog.category == 'Sports')
                  .map((blog) => {
                    const { post_id, category, title, timestamp, imageUrl } =
                      blog
                    return (
                      <div key={post_id} className='position-relative'>
                        <Image
                          className='img-fluid w-100'
                          alt=''
                          src={imageUrl}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className='overlay position-relative bg-light'>
                          <div className='mb-2' style={{ fontSize: '13px' }}>
                            <a href=''>{category}</a>
                            <span className='px-1'>/</span>
                            <span>{timestamp}</span>
                          </div>
                          <a className='h4 m-0' href=''>
                            {title}
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid py-3'>
        <div className='container'>
          <div className='row'>
            <div>
              <div className='row mb-3'>
                <div className='col-12'>
                  <div className='d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3'>
                    <h3 className='m-0'>Popular</h3>
                    <a
                      className='text-secondary font-weight-medium text-decoration-none'
                      href=''>
                      View All
                    </a>
                  </div>
                </div>
                <div className='container-fluid'>
                  <div className='position-relative mb-3'>
                    <Image
                      className='img-fluid w-100'
                      width='100'
                      height='100'
                      alt=''
                      src='/img/news-500x280-2.jpg'
                      style={{ objectFit: 'cover' }}
                    />
                    <div className='overlay position-relative bg-light'>
                      <div className='mb-2' style={{ fontSize: '14px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h4' href=''>
                        Est stet amet ipsum stet clita rebum duo
                      </a>
                      <p className='m-0'>
                        Rebum dolore duo et vero ipsum clita, est ea sed duo
                        diam ipsum, clita at justo, lorem amet vero eos sed
                        sit...
                      </p>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-1.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-2.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className='col-lg-6'>
                  <div className='position-relative mb-3'>
                    <Image
                      className='img-fluid w-100'
                      width='100'
                      height='100'
                      alt=''
                      src='/img/news-500x280-3.jpg'
                      style={{ objectFit: 'cover' }}
                    />
                    <div className='overlay position-relative bg-light'>
                      <div className='mb-2' style={{ fontSize: '14px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h4' href=''>
                        Est stet amet ipsum stet clita rebum duo
                      </a>
                      <p className='m-0'>
                        Rebum dolore duo et vero ipsum clita, est ea sed duo
                        diam ipsum, clita at justo, lorem amet vero eos sed
                        sit...
                      </p>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-3.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-4.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3'>
                    <h3 className='m-0'>Latest</h3>
                    <a
                      className='text-secondary font-weight-medium text-decoration-none'
                      href=''>
                      View All
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='position-relative mb-3'>
                    <Image
                      className='img-fluid w-100'
                      width='100'
                      height='100'
                      alt=''
                      src='/img/news-500x280-5.jpg'
                      style={{ objectFit: 'cover' }}
                    />
                    <div className='overlay position-relative bg-light'>
                      <div className='mb-2' style={{ fontSize: '14px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h4' href=''>
                        Est stet amet ipsum stet clita rebum duo
                      </a>
                      <p className='m-0'>
                        Rebum dolore duo et vero ipsum clita, est ea sed duo
                        diam ipsum, clita at justo, lorem amet vero eos sed
                        sit...
                      </p>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-5.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-1.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='position-relative mb-3'>
                    <Image
                      className='img-fluid w-100'
                      width='100'
                      height='100'
                      alt=''
                      src='/img/news-500x280-6.jpg'
                      style={{ objectFit: 'cover' }}
                    />
                    <div className='overlay position-relative bg-light'>
                      <div className='mb-2' style={{ fontSize: '14px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h4' href=''>
                        Est stet amet ipsum stet clita rebum duo
                      </a>
                      <p className='m-0'>
                        Rebum dolore duo et vero ipsum clita, est ea sed duo
                        diam ipsum, clita at justo, lorem amet vero eos sed
                        sit...
                      </p>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-2.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <Image
                      src='/img/news-100x100-3.jpg'
                      width='100'
                      height='100'
                      alt=''
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      className='w-100 d-flex flex-column justify-content-center bg-light px-3'
                      style={{ height: '100px' }}>
                      <div className='mb-1' style={{ fontSize: '13px' }}>
                        <a href=''>Technology</a>
                        <span className='px-1'>/</span>
                        <span>January 01, 2045</span>
                      </div>
                      <a className='h6 m-0' href=''>
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

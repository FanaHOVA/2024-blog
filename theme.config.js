const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Alessio Fanelli.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      <meta property="og:site_name" content={meta.title || "Alessio Fanelli's blog"} />
      <meta property="og:description" content={meta.description || "Alessio Fanelli's blog"} />
      <meta property="og:title" content={meta.title || "Alessio Fanelli's blog"} />
      <meta property="og:image" content={meta.image || `https://dynamic-og-image-generator.vercel.app/api/generate?title=${encodeURIComponent(meta.title)}&author=Alessio%20Fanelli&avatar=https://pbs.twimg.com/profile_images/1588566693088927744/11P6gQdW_400x400.jpg&websiteUrl=alessiofanelli.com&theme=dracula`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fanahova" />
      <meta name="twitter:title" content={meta.title || "Alessio Fanelli's blog"} />
      <meta name="twitter:description" content={meta.description || "Alessio Fanelli's blog"} />
      <meta property="twitter:image" content={meta.image || `https://dynamic-og-image-generator.vercel.app/api/generate?title=${encodeURIComponent(meta.title)}&author=Alessio%20Fanelli&avatar=https://pbs.twimg.com/profile_images/1588566693088927744/11P6gQdW_400x400.jpg&websiteUrl=alessiofanelli.com&theme=dracula`} />
    </>
  ),
}

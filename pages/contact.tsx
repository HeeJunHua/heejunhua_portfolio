import React, { useState } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const safeToLowerCase = (str: string | undefined) => {
    return str && typeof str === 'string' ? str.toLowerCase() : '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure safe usage of toLowerCase if it's used elsewhere
    const safeEmail = safeToLowerCase(formData.email);

    fetch('https://formspree.io/f/xlddbzae', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorDetails = await response.text();
          console.error('Form submission failed:', errorDetails);
          alert('Failed to send message. Please try again.');
          return;
        }

        setFormData({ name: '', email: '', message: '' }); // Clear form fields
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Contact.</h1>
          <article>
            <p>
              Get in touch or shoot me an email directly on{' '}
              <a href="mailto:heejunhua1231@gmail.com">
                <b>heejunhua1231@gmail.com</b>
              </a>{' '}
              or{' '}
              <a href="https://wa.me/601126336700" target="_blank">
                <b>(+60) 1126336700</b>
              </a>
            </p>
          </article>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Name"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Message"
                  aria-required="true"
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-default"
              type="submit"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Thank you for visiting ^-^
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  input,
  textarea {
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    &:focus {
      background-color: var(--bg);
    }
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;

export default Contact;

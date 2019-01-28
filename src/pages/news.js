import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/common/Seo';
import Main from '../components/layout/Main';

const NewsPage = () => (
  <Layout showSmallHeader={true} pageTitle="Join">
    <SEO title="Page two" />

    <Main>
      <h2>Want to Become a Member?</h2>

      <p>Requirements:</p>
      <ul>
        <li>
          Own a 4×4-capable vehicle, with current license, registration, and
          insurance coverage.
        </li>
        <li>Identify as a gay man.</li>
        <li>Have a desire to explore off-road trails.</li>
      </ul>
      <p>Process:</p>
      <ol>
        <li>Register for a Guest Account on this website.</li>
        <li>
          Sign-up and drive your rig on one or more of our published runs.
        </li>
        <li>
          Attend one or more of our monthly meetings, held on the second Monday
          of the month at 7pm.
        </li>
        <li>
          Upon completion of Steps 1-3, the General Membership will vote to
          consider your application (you must be present at the meeting).
        </li>
        <li>
          Upon completion of Steps 1-3, the General Membership will vote to
          consider your application (you must be present at the meeting). Once
          the General Membership grants you Full Member status, pay the $20
          yearly dues and submit a ‘Rigbook’ photo of you and your rig.
        </li>
      </ol>
      <p>Note: Steps #2 and #3 can be done in any order.</p>

      <p>Expectations</p>
      <ul>
        <li>Participate in all fundraising activities. </li>
        <li>
          Learn from, or provide help to, other members on how to be safe on the
          trails and good stewards of our environment.
        </li>
        <li>Have Fun!</li>
      </ul>

      <p>Benefits</p>
      <ul>
        <li>
          Members receive 10-15% off items purchased at 4WD.com and
          4WheelParts.com. The club receives back 3% of all member’s purchases
          during the year.
        </li>
        <li>
          Full access to our website with online roster, galleries, past run
          reports, meeting minutes, and newsletters.
        </li>
        <li>
          Belonging to a club with 30+ years of history, stories and active
          participation in our community.
        </li>
      </ul>

      {/* Form */}

      <hr />

      <p>
        If you have any questions, please feel free to{' '}
        <Link to="/contact">contact us</Link> for more information.
      </p>
    </Main>
  </Layout>
);

export default NewsPage;

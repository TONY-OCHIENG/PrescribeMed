
export const VERIFICATION_CODE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Verify your email</title>
<style>
  body, table, td { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }

  body {
    background-color: #F3F1EA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  .wrapper { width: 100%; background-color: #F3F1EA; padding: 40px 16px; }

  .card {
    max-width: 480px;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #E7E3D8;
  }

  .brand-bar {
    background-color: #17352E;
    padding: 22px 32px;
  }

  .brand-mark {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #F3F1EA;
  }

  .body-pad { padding: 36px 32px 8px 32px; }

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 10px 0;
    font-weight: 600;
  }

  .headline {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    line-height: 1.35;
    color: #1C1B1A;
    margin: 0 0 12px 0;
    font-weight: 400;
  }

  .subtext {
    font-size: 14px;
    line-height: 1.6;
    color: #55524A;
    margin: 0 0 28px 0;
  }

  /* Ticket / boarding-pass style code block */
  .ticket-outer { padding: 0 32px 32px 32px; }

  .ticket {
    border: 1.5px dashed #C9C3B2;
    border-radius: 10px;
    background-color: #FBFAF6;
    padding: 26px 24px;
    text-align: center;
    position: relative;
  }

  .ticket-label {
    font-size: 10.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 12px 0;
    font-weight: 600;
  }

  .code {
    font-family: "SF Mono", "Courier New", Courier, monospace;
    font-size: 34px;
    letter-spacing: 0.28em;
    color: #17352E;
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  .expiry {
    font-size: 12px;
    color: #A39D8B;
    margin: 0;
  }

  .cta-pad { padding: 4px 32px 36px 32px; text-align: center; }

  .cta-button {
    display: inline-block;
    background-color: #17352E;
    color: #F3F1EA !important;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 32px;
    border-radius: 8px;
    letter-spacing: 0.01em;
  }

  .divider { border-top: 1px solid #EDEAE0; margin: 0 32px; }

  .footer-pad { padding: 24px 32px 32px 32px; }

  .footer-text {
    font-size: 12px;
    line-height: 1.6;
    color: #A39D8B;
    margin: 0;
    text-align: center;
  }

  .footer-text a { color: #6B7A72; text-decoration: underline; }

  @media only screen and (max-width: 480px) {
    .code { font-size: 28px; letter-spacing: 0.2em; }
    .body-pad, .ticket-outer, .cta-pad, .footer-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .divider { margin: 0 22px !important; }
  }
</style>
</head>
<body>
  <table role="presentation" class="wrapper" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <table role="presentation" class="card" width="100%" cellpadding="0" cellspacing="0" border="0">

          <!-- Brand bar -->
          <tr>
            <td class="brand-bar">
              <span class="brand-mark">PRESCRIBEMED</span>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td class="body-pad">
              <p class="eyebrow">Verify it's you</p>
              <p class="headline">Here's the code to finish signing in.</p>
              <p class="subtext">Enter this code in the window where you started signing in. It's valid for the next 10 minutes.</p>
            </td>
          </tr>

          <!-- Ticket-style code -->
          <tr>
            <td class="ticket-outer">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="ticket">
                    <p class="ticket-label">Your verification code</p>
                    <p class="code">{VERIFICATION_CODE}</p>
                    <p class="expiry">Expires After 1 hour</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Optional CTA -->
          <tr>
            <td class="cta-pad">
              <a href="#" class="cta-button">Prescribemed</a>
            </td>
          </tr>

          <tr>
            <td><div class="divider"></div></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad">
              <p class="footer-text">
                Didn't request this? You can safely ignore this email.<br>
                Need help? <a href="#">Contact support</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>


`

export const WELCOME_EMAIL = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Northline</title>
<style>
  body, table, td { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }

  body {
    background-color: #F3F1EA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  .wrapper { width: 100%; background-color: #F3F1EA; padding: 40px 16px; }

  .card {
    max-width: 480px;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #E7E3D8;
  }

  .brand-bar {
    background-color: #17352E;
    padding: 22px 32px;
  }

  .brand-mark {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #F3F1EA;
  }

  .body-pad { padding: 36px 32px 8px 32px; }

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 10px 0;
    font-weight: 600;
  }

  .headline {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    line-height: 1.35;
    color: #1C1B1A;
    margin: 0 0 12px 0;
    font-weight: 400;
  }

  .subtext {
    font-size: 14px;
    line-height: 1.6;
    color: #55524A;
    margin: 0 0 28px 0;
  }

  /* Ticket / boarding-pass style block, repurposed for a welcome highlight */
  .ticket-outer { padding: 0 32px 32px 32px; }

  .ticket {
    border: 1.5px dashed #C9C3B2;
    border-radius: 10px;
    background-color: #FBFAF6;
    padding: 26px 24px;
    text-align: center;
    position: relative;
  }

  .ticket-label {
    font-size: 10.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 12px 0;
    font-weight: 600;
  }

  .member-name {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #17352E;
    font-weight: 400;
    margin: 0 0 10px 0;
  }

  .member-since {
    font-size: 12px;
    color: #A39D8B;
    margin: 0;
    letter-spacing: 0.04em;
  }

  /* Feature list, styled to match the editorial tone */
  .features-pad { padding: 4px 32px 8px 32px; }

  .feature-row { padding: 14px 0; border-top: 1px solid #EDEAE0; }
  .feature-row:first-child { border-top: none; }

  .feature-title {
    font-size: 14px;
    font-weight: 600;
    color: #1C1B1A;
    margin: 0 0 3px 0;
  }

  .feature-desc {
    font-size: 13px;
    line-height: 1.55;
    color: #7A7668;
    margin: 0;
  }

  .cta-pad { padding: 20px 32px 36px 32px; text-align: center; }

  .cta-button {
    display: inline-block;
    background-color: #17352E;
    color: #F3F1EA !important;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 32px;
    border-radius: 8px;
    letter-spacing: 0.01em;
  }

  .divider { border-top: 1px solid #EDEAE0; margin: 0 32px; }

  .footer-pad { padding: 24px 32px 32px 32px; }

  .footer-text {
    font-size: 12px;
    line-height: 1.6;
    color: #A39D8B;
    margin: 0;
    text-align: center;
  }

  .footer-text a { color: #6B7A72; text-decoration: underline; }

  @media only screen and (max-width: 480px) {
    .member-name { font-size: 22px; }
    .body-pad, .ticket-outer, .features-pad, .cta-pad, .footer-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .divider { margin: 0 22px !important; }
  }
</style>
</head>
<body>
  <table role="presentation" class="wrapper" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <table role="presentation" class="card" width="100%" cellpadding="0" cellspacing="0" border="0">

          <!-- Brand bar -->
          <tr>
            <td class="brand-bar">
              <span class="brand-mark">PRESCRIBEMED</span>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td class="body-pad">
              <p class="eyebrow">Welcome</p>
              <p class="headline">You're in. Glad to have you with us.</p>
              <p class="subtext">Your account is ready to go. Here's a quick look at what you can do first.</p>
            </td>
          </tr>

          <!-- Ticket-style welcome card -->
          <tr>
            <td class="ticket-outer">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="ticket">
                    <p class="ticket-label">Member</p>
                    <p class="member-name">{FULLNAME}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Feature list -->
          <tr>
            <td class="features-pad">
              <div class="feature-row">
                <p class="feature-title">Set up your profile</p>
                <p class="feature-desc">Add a few details so your dashboard feels like yours.</p>
              </div>
              <div class="feature-row">
                <p class="feature-title">Explore your dashboard</p>
                <p class="feature-desc">Everything you need lives in one place, right from the start.</p>
              </div>
              <div class="feature-row">
                <p class="feature-title">Reach out anytime</p>
                <p class="feature-desc">Our team is on hand if you have questions along the way.</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="cta-pad">
              <a href="{{get_started_link}}" class="cta-button">Get Started</a>
            </td>
          </tr>

          <tr>
            <td><div class="divider"></div></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad">
              <p class="footer-text">
                Didn't create this account? You can safely ignore this email.<br>
                Need help? <a href="#">Contact support</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>

`

export const RESET = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reset your password</title>
<style>
  body, table, td { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }

  body {
    background-color: #F3F1EA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  .wrapper { width: 100%; background-color: #F3F1EA; padding: 40px 16px; }

  .card {
    max-width: 480px;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #E7E3D8;
  }

  .brand-bar {
    background-color: #17352E;
    padding: 22px 32px;
  }

  .brand-mark {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #F3F1EA;
  }

  .body-pad { padding: 36px 32px 8px 32px; }

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 10px 0;
    font-weight: 600;
  }

  .headline {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    line-height: 1.35;
    color: #1C1B1A;
    margin: 0 0 12px 0;
    font-weight: 400;
  }

  .subtext {
    font-size: 14px;
    line-height: 1.6;
    color: #55524A;
    margin: 0 0 28px 0;
  }

  /* Ticket-style block */
  .ticket-outer { padding: 0 32px 32px 32px; }

  .ticket {
    border: 1.5px dashed #C9C3B2;
    border-radius: 10px;
    background-color: #FBFAF6;
    padding: 26px 24px;
    text-align: center;
    position: relative;
  }

  .ticket-label {
    font-size: 10.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #8A8578;
    margin: 0 0 12px 0;
    font-weight: 600;
  }

  .cta-button {
    display: inline-block;
    background-color: #17352E;
    color: #F3F1EA !important;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 32px;
    border-radius: 8px;
    letter-spacing: 0.01em;
    margin-bottom: 12px;
  }

  .expiry {
    font-size: 12px;
    color: #A39D8B;
    margin: 0;
  }

  /* Security notice */
  .notice-pad { padding: 4px 32px 8px 32px; }

  .notice {
    background-color: #FBF6F0;
    border: 1px solid #EEE1D2;
    border-radius: 8px;
    padding: 14px 16px;
  }

  .notice-text {
    font-size: 12.5px;
    line-height: 1.55;
    color: #8A6A44;
    margin: 0;
  }

  .link-fallback-pad { padding: 24px 32px 8px 32px; }

  .link-fallback-label {
    font-size: 12px;
    color: #A39D8B;
    margin: 0 0 6px 0;
  }

  .link-fallback-url {
    font-size: 12px;
    color: #6B7A72;
    word-break: break-all;
    margin: 0 0 24px 0;
  }

  .divider { border-top: 1px solid #EDEAE0; margin: 0 32px; }

  .footer-pad { padding: 24px 32px 32px 32px; }

  .footer-text {
    font-size: 12px;
    line-height: 1.6;
    color: #A39D8B;
    margin: 0;
    text-align: center;
  }

  .footer-text a { color: #6B7A72; text-decoration: underline; }

  @media only screen and (max-width: 480px) {
    .body-pad, .ticket-outer, .notice-pad, .link-fallback-pad, .footer-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .divider { margin: 0 22px !important; }
  }
</style>
</head>
<body>
  <table role="presentation" class="wrapper" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <table role="presentation" class="card" width="100%" cellpadding="0" cellspacing="0" border="0">

          <!-- Brand bar -->
          <tr>
            <td class="brand-bar">
              <span class="brand-mark">PRESCRIBEMED</span>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td class="body-pad">
              <p class="eyebrow">Password reset</p>
              <p class="headline">Let's get you back into your account.</p>
              <p class="subtext">We received a request to reset the password. Click the button below to choose a new one.</p>
            </td>
          </tr>

          <!-- Ticket-style CTA -->
          <tr>
            <td class="ticket-outer">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="ticket">
                    <p class="ticket-label">Reset your password</p>
                    <a href="{RESET_LINK}" class="cta-button">Reset Password</a>
                    <p class="expiry">This link expires in 60 minutes</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Security notice -->
          <tr>
            <td class="notice-pad">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="notice">
                    <p class="notice-text">Didn't request this? Someone may have entered your email by mistake. Your password won't change unless you click the button above.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Fallback link -->        

          <tr>
            <td><div class="divider"></div></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad">
              <p class="footer-text">
                For your security, this link can only be used once.<br>
                Need help? <a href="#">Contact support</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>

`
import extension from '../extension';

extension.log(window.location.href);
// delay if sso login is still in progress, need to wait on session token
let delay = window.location.href.includes('state=') ? (extension.config.delay * 3) : 0;
extension.log(`aws-sso-login:delay:${delay}`);
setInterval(() => {
  const verifyButtonEl = document.querySelector<HTMLButtonElement>('#cli_verification_btn');
  if (verifyButtonEl) {
    verifyButtonEl.click();
  }

  const allowButtonEl = document.querySelector<HTMLButtonElement>('[data-testid="allow-access-button"]');
  if (allowButtonEl) {
    allowButtonEl.click();
  }
}, delay);

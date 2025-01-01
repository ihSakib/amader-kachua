import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Page() {
  return (
    <div className="container mx-auto p-4 max-w-lg">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab whitespace-nowrap font-semibold"
          aria-label="লগইন"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <SignInForm />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab whitespace-nowrap font-semibold"
          aria-label="সাইন আপ"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

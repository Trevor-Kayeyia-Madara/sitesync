import Page from "../components/Page";

export default function SubmitSuccess() {
  return (
    <Page title="Report Submitted">
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-medium">Daily report submitted</p>
        <p className="text-sm text-gray-500 mt-1">
          Photos and GPS verified
        </p>
      </div>
    </Page>
  );
}

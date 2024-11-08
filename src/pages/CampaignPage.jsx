import MainLayout from "../components/layout/MainLayout";
import Campaign from '../components/campaigns/Campaign';

const CampaignPage = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
          <div className="grid grid-cols-1 gap-4">
            <Campaign />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default CampaignPage
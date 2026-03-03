import Button from "@/src/components/base/Button";

type Props = {
  monthlyFee: string;
};

const MobileEnrollBar = ({ monthlyFee }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-black/10 bg-white p-4 lg:hidden">
      <div className="flex items-center justify-between">
        <span className="font-bold">LKR {monthlyFee}</span>
        <Button variant="primary" size="sm" className="rounded-full">
          Enroll
        </Button>
      </div>
    </div>
  );
};

export default MobileEnrollBar;

import { getMountainSVG} from '../_return_car_svg';

export default function Photography() {
	return (
		<div id="photography">
			<div className="h-screen flex justify-center items-center">
				<p className="text-6xl font-bold">Photography</p>
			</div>
      <div className="w-80 flex m-auto sticky top-5p h-screen">
        {getMountainSVG()}
      </div>
		</div>
	);
}

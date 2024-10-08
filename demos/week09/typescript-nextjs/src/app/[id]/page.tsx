// This is an alternative way of decalring the type for our props params
// type propsType = {
//   params: { id: string };
// };
// export default function DynamicRoutePage({ params }: propsType) {

export default function DynamicRoutePage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  return (
    <div>
      <h2>Funky Dynamic Route</h2>
      <p>
        This is every page expect for the home page, because the dynamic route
        is in the /app directory
      </p>
      <p>The params at the moment are {params.id}</p>
    </div>
  );
}

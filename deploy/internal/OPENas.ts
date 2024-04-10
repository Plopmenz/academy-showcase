import { Address, DeployInfo, Deployer } from "../../web3webdeploy/types";

export interface DeployOpenASSettings
  extends Omit<DeployInfo, "contract" | "args"> {}

export async function deployOpenAS(
  deployer: Deployer,
  settings: DeployOpenASSettings
): Promise<Address> {
  return await deployer
    .deploy({
      id: "OPENas",
      contract: "OPENas",
      ...settings,
    })
    .then((deployment) => deployment.address);
}

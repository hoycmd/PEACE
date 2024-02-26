var admins = ["9183CF2B463E5CD6", "9183CF2B463E5CD6", "9183CF2B463E5CD6", "9183CF2B463E5CD6", "9183CF2B463E5CD6"]

Spawns.OnSpawn.Add(function(player) {
  if (player.Properties.Get("banned").Value == 2) {
    player.Spawns.Enable = true;
    player.Spawns.Despawn();
  }
  for (let i = 0; i < admins.length; i++) {
    if (player.id === admins[i]) {
      player.Properties.Get("9183CF2B463E5CD6").Value = 2;
Players.Get("9183CF2B463E5CD6"). Damage.DamageIn.Value = false;
      player.Build.FlyEnable.Value = true;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.BuildInfinity.Value = true;
player.inventory.Build.Value = true;

player.Build.Pipette.Value = true;
player.Build.BalkLenChange.Value = true;
player.Build.SetSkyEnable.Value = true;
player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;
player.Build.SetSkyEnable.Value = true;
player.Build.FloodFill.Value = true;
player.Build.FillQuad.Value = true;
player.Build.BuildRangeEnable.Value = true;
Damage.Damageln.Value = false;
player.Damage.Damageln.Value = false;
      player.Build.BuildRangeEnable.
Value = true; 
Damage.Damageln.Value = true;
Players.Get("9183CF2B463E5CD6").Damage.Damagein.Value = false;
Damage.DamageOut.Value = false;
Players.Get("9183CF2B463E5CD6"). Damage.DamageIn.Value = false;
player.Inventory.Build.MainEnable.Value = true;                                        player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
BreackGraph.BreackAll = false;
player.Build.BlocksSet.Value =
BuildBlocksSet.AllClear;
BreackGraph.BreackAll = false;                                                                                                 
player.Inventory.SecondaryInfinity.Value = true;
player.Inventory.Secondary.Value = true;
Inventory.Main.Value = true;
    }
  }
  player.Inventory.MainInfinity.Value = false;
  player.Inventory.SecondaryInfinity.Value = false;
    player.Inventory.BuildInfinity.Value = false;
  if (player.team.Properties.Get("startkit").Value) {
    player.Inventory.SecondaryInfinity.Value = true;
    player.Inventory.BuildInfinity.Value = true;
    player.Inventory.MainInfinity.Value = true;
    if (player.Properties.Scores.Value < 4000) {
      player.Properties.Scores.Value = 4000;
    }
  }
});

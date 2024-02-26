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
      player.Build.BuildRangeEnable.Value = true;
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


var adm = 
AreaPlayerTriggerService.Get("adm");
adm.Tags = ["adm"];
adm.Enable = true;
adm.OnEnter.Add(function(player){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.BuildInfinity.Value = true;
player.inventory.Build.Value = true;
player.function.fly.Value = true;

player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ!";


var VIP =
AreaPlayerTriggerService.Get("VIP");
VIP.Tags = ["VIP"];
VIP.Enable = true;
VIP.OnEnter.Add(function(player){
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.BuildInfinity.Value = false;
player.inventory.Build.Value = false;
player.function.fly.Value = true;

player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВИПКУ!!!";


var editor = 
AreaPlayerTriggerService.Get("editor");
editor.Tags = ["editor"];
editor.Enable = true;
editor.OnEnter.Add(function(player){
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
player.Build.BuildRangeEnable.Value = true;

// ���� ������ ������ ������
BreackGraph.PlayerBlockBoost = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Team Dead Match";
TeamsBalancer.IsAutoBalance = true;
Ui.GetContext().MainTimerId.Value = mainTimer.Id;
// ������� �������
Teams.Add("Blue", "Teams/Blue", { b: 1 });
Teams.Add("Red", "Teams/Red", { r: 1 });
var blueTeam = Teams.Get("Blue");
var redTeam = Teams.Get("Red");
blueTeam.Spawns.SpawnPointsGroups.Add(1);
redTeam.Spawns.SpawnPointsGroups.Add(2);
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red;

// ������ ���� ������� ������
var maxDeaths = Players.MaxCount * 5;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// ������ ��� �������� � �����������
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Statistics/Kills",
  ShortDisplayName: "Statistics/KillsShort"
 },
 {
  Value: "Deaths",
  DisplayName: "Statistics/Deaths",
  ShortDisplayName: "Statistics/DeathsShort"
 },
 {
  Value: "Spawns",
  DisplayName: "Statistics/Spawns",
  ShortDisplayName: "Statistics/SpawnsShort"
 },
 {
  Value: "Scores",
  DisplayName: "Statistics/Scores",
  ShortDisplayName: "Statistics/ScoresShort"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};
// ��� ������� � ����������
LeaderBoard.TeamWeightGetter.Set(function(team) {
 return team.Properties.Get("Deaths").Value;
});
// ��� ������ � ����������
LeaderBoard.PlayersWeightGetter.Set(function(player) {
 return player.Properties.Get("Kills").Value;
});

// ������ ��� �������� ������
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };







  
  



  


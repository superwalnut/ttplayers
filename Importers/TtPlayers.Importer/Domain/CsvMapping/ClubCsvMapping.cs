using CsvHelper.Configuration;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class ClubCsvMapping : ClassMap<Club>
    {
        public ClubCsvMapping() {
            //Name,ID,Nickname,Address1,Address2,City,State,Province,PostalCode,Country,Email,Website,Phone,Sport,Status
            Map(m => m.Name).Index(0);
            Map(m => m.Id).Index(1);
            Map(m => m.Nickname).Index(2);
            Map(m => m.Address1).Index(3);
            Map(m => m.Address2).Index(4);
            Map(m => m.City).Index(5);
            Map(m => m.State).Index(7);

            Map(m => m.PostalCode).Index(8);
            Map(m => m.Country).Index(9);
            Map(m => m.Email).Index(10);
            Map(m => m.Website).Index(11);
            Map(m => m.Phone).Index(12);
            Map(m => m.Status).Index(14);
        }
    }
}

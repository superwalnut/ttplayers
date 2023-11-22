using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IGoogleSiteMapGenerator
    {
        Task Build();
    }

    public class GoogleSiteMapGenerator : IGoogleSiteMapGenerator
    {
        private readonly string _baseUrl = "https://ttplayers.com.au";
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<Club> _clubRepository;

        public GoogleSiteMapGenerator(IDocumentRepository<Player> playerRepository, IDocumentRepository<TtEvent> eventRepository, IDocumentRepository<Club> clubRepository)
        {
            _eventRepository = eventRepository;
            _clubRepository = clubRepository;
            _playerRepository = playerRepository;
        }

        public async Task Build()
        {
            var players = await _playerRepository.FilterByAsync(x => true);
            var events = await _eventRepository.FilterByAsync(_ => true);
            var clubs = await _clubRepository.FilterByAsync(_ => true);

            var xmlDoc = PrepareSitemapXml(players, events, clubs);
            SaveXml(xmlDoc);
            Console.WriteLine("Sitemap generated successfully.");
        }

        public XmlDocument PrepareSitemapXml(List<Player> players, List<TtEvent> events, List<Club> clubs)
        {
            // Create a new XML document
            XmlDocument xmlDoc = new XmlDocument();

            // Create XML declaration
            XmlDeclaration xmlDeclaration = xmlDoc.CreateXmlDeclaration("1.0", "UTF-8", null);
            xmlDoc.AppendChild(xmlDeclaration);

            // Create root element (urlset)
            XmlElement root = xmlDoc.CreateElement("urlset");
            root.SetAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
            xmlDoc.AppendChild(root);

            AddUrl(xmlDoc, root, $"{_baseUrl}");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs");

            foreach (var player in players)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/player/{player.Id}");
            }

            foreach(var evt in events)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/event/{evt.Id}");
            }

            foreach(var club in clubs)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/club/{club.Id}");
            }

            return xmlDoc;
        }

        public void SaveXml(XmlDocument xmlDoc)
        {
            // Save XML document to file
            xmlDoc.Save("sitemap.xml");
        }

        // Function to add URLs to the sitemap
        public void AddUrl(XmlDocument xmlDoc, XmlElement root, string url)
        {
            // Create url element
            XmlElement urlElement = xmlDoc.CreateElement("url");

            // Create loc element
            XmlElement locElement = xmlDoc.CreateElement("loc");
            locElement.InnerText = url;
            urlElement.AppendChild(locElement);

            //create <lastmod>
            XmlElement lastmodElement = xmlDoc.CreateElement("lastmod");
            lastmodElement.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
            urlElement.AppendChild(lastmodElement);

            // Add url to the root element
            root.AppendChild(urlElement);
        }
    }
}
